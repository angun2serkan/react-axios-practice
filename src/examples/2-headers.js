import { useState } from 'react';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'

const HeaderSetup = () => {
  const [joke, setJoke] = useState('random dad joke');

  const fetchDadJoke = async () => {
    try {
      const {data} = await axios.get(url, {
        headers:{
          Accept: 'application/json',
        },
      });
      setJoke(data.joke);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  );
};
export default HeaderSetup;
