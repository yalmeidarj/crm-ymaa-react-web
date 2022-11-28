import { Button } from 'primereact/button';
import 'primeicons/primeicons.css'
import styles from '../styles/ServiceTable.module.css'


export default function AddServiceButton() {
  // useEffect(() => { 
  //   data
  // });
  // const service = data.data.services;
  // const [query, setQuery] = useState("");

    //   state = {
    
    // }
    // handleSubmit = event => {
    //   event.preventDefault();
    //   console.log(this.state) onsubmit={ this.handleSubmit }
    // }
    return (
      <>
        <form >
          <label for="email">Email:</label>
          <input type="text" name="email" id="email" />

          <label for="lastName">Nome:</label>
          <input type="text" name="lastName" id="lastName" />

          <button type="submit">Submit</button>
        </form>

        <script>

        </script>
      </>
    )
}
