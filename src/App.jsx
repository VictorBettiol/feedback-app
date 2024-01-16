import { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (confirm('Are you sure you want to delete this feedback?'))
      setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
