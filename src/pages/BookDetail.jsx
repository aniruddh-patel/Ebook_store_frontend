import React, {useContext, useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import '../components/css/BookDetail.css'
import downloadicon from '../images/icons/downloadicon.png'
import bookicon from '../images/icons/bookicon.png'
import { Context } from '..';
import { toast } from 'react-toastify';


const BookDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();
  const { isauthenticated } = useContext(Context)

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:5555/api/v1/books/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if(data.success){
          setItem(data.books);
          // console.log(data)
        }
        
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBook();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  const handleReadOnline = () => {
    if(!isauthenticated){
      toast.info("Login First");
      navigate('/signin');
      return;
    }
    navigate('/previewBook', { state: { pdfUrl: item.pdfUrl } });
  };

  
  return (
    <div className='bookdetail-container-box'>
      <div className='bookdetail-container'>
        <div className='bookcover-div'>
          {/* <img className='two' src='' alt="art" /> */}
          <img className='one' src={item.bookCoverUrl} alt="art" />
        </div>
        <div className='bookinfo-div'>
          <div className='bookname-heading'>{item.bookName}</div>
          <div className='authorname-heading'>By {item.author}</div>
          <div className='bookinfo-div-button-div'>
            <div><button className='preview' onClick={handleReadOnline}><img src={bookicon} alt="" />Read Online</button></div>
            <div><button className='download' onClick={() => window.location.href = item.pdfUrl}><img src={downloadicon} alt="" />Download</button></div>
          </div>
          <div className='bookinfo-div-paragraph'>{item.bookSummary}</div>
        </div>
      </div>
    </div>
  )
}

export default BookDetail









