import { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import '../styles/EmailSubscribe.scss';

function EmailSubscriptionForm() {
  const [email, setEmail] = useState('');
  const { setItemAdded } = useContext(CartContext);

  const handleSubmit = e => {
    e.preventDefault();
    setEmail('');
    setItemAdded(true);
  };

  return (
    <form onSubmit={handleSubmit} className='email-subscribe'>
      <input
        type='email'
        name='email'
        placeholder='Enter your email here'
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className='email-input'
      />
      <button type='submit' className='subscribe-button'>
        Subscribe
      </button>
    </form>
  );
}

export default EmailSubscriptionForm;
