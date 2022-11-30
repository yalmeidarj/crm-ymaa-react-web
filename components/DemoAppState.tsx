import React, { useCallback, useMemo } from 'react'
// import FullCalendar, { EventApi, DateSelectArg, EventClickArg, EventContentArg, formatDate } from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
import styles from '../styles/Calendar.module.css'

import { useState } from "react";
import { Calendar, DateLocalizer, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import 'moment/locale/pt-BR';
import 'moment/locale/pt';
import { globalizeLocalizer } from 'react-big-calendar'
import globalize from 'globalize'

const localizer = globalizeLocalizer(globalize)

require('globalize/lib/cultures/globalize.culture.pt-BR')



const events = [
    {
        id:'',  
        title: "Big Meeting",
        allDay: true,
        start: new Date(2022, 5, 0 ),
        end: new Date(2022, 5, 0),
    },
    {
        id:'',  
        title: "Vacation",
        start: new Date(2022, 6, 7),
        end: new Date(2022, 6, 10),
    },
    {
        id:'',  
        title: "Conference",
        allDay: true,
        start: new Date(2022, 5, 20),
        end: new Date(2022, 5, 20),
    },
];
export default function DemoAppState(props) {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  const [initialDate, setInitialDate] = useState("Data e horário inicial");
  const [culture, setCulture] = useState('pt-BR')
  const handleSelectEvent = useCallback(
    (event) => window.alert(event.title),
    []
  )
  // const { defaultDate, scrollToTime } = useMemo(
  //   () => ({
  //     defaultDate: new Date(2015, 3, 12),
  //     scrollToTime: new Date(1970, 1, 1, 6),
  //   }),
  //   []
  // )
  
  const { defaultDate, messages } = useMemo(
    () => ({
      defaultDate: new Date(2022, 12, 29 ),
      messages:
      {
        date: 'Data',
        time: 'Horário',
        event: 'Evento',
        allDay: 'Dia inteiro',
        week: 'Semana',
        work_week: 'Semana Útil',
        day: 'Dia',
        month: 'Mês',
        previous: 'Voltar',
        next: 'Próximo',
        yesterday: 'Ontem',
        tomorrow: 'Amanhã',
        today: 'Hoje',
        agenda: 'Agenda',
        noEventsInRange: 'Não há eventos nesse período.',

        showMore: total => `+${total} mais`,
      },
    }),
    []
  )
  function handleAddEvent() {
      
    for (let i = 0; i < allEvents.length; i++) {

      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);

      if (
        ((d1 <= d2) && (d2 <= d3)) || ((d1 <= d4) &&
          (d4 <= d3))
      ) {
        alert("CLASH");
        break;
      }
  
    }
      
    setInitialDate("");
    setAllEvents([...allEvents, newEvent]);
  }
  function handleDeleteEvent() {
    const data = allEvents.filter((element) => {
      return element !== element;
    })
  }

  return (
    <div className={styles.App}>
      {/* <h1>Calendar</h1> */}
      <div className={styles.wrapper}>
        <div className={styles.addEventForm}>
          <div className={styles.c}>
            <h2 className={styles.title}>Adicionar novo Evento</h2>
            <input className={styles.eventTitleInput} type="text" placeholder="Titulo novo Evento" style={{ width: "30%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
            <DatePicker
              className={styles.dateInput} 
              dateFormat="MM-dd / HH:mm"
              showTimeSelect placeholderText={initialDate}
              // style={{ marginRight: "10px" }}
              selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })}
            />
            <DatePicker
              className={styles.dateInput}
              dateFormat="MM-dd / HH:mm"
              showTimeSelect placeholderText={initialDate}
              selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })}
            />
            <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
              Adicionar
            </button>
        </div>
        <button stlye={{ marginTop: "30px" }} onClick={handleDeleteEvent}>
          Deletar
        </button>
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          culture={culture}
          messages={messages}
          // onSelectEvent={handleSelectEvent}
          // onSelectSlot={handleSelectEvent}
          // scrollToTime={scrollToTime}
          selectable
          style={{  marginTop:"30px", height: 600 }}
          />
        </div>  
      </div>
    </div>
  );
}

// "rbc-event tbc-selected"