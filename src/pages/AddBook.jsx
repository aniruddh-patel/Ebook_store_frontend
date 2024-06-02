import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify'
import axios from 'axios';
import '../components/css/Addbook.css'

const AddBook = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [bookName, setBookName] = useState('');
    const [author, setAuthor] = useState('');
    const [bookSummary, setBookSummary] = useState('');
    const [genre, setGenre] = useState('');
    const [pdfFile, setPdfFile] = useState(null);
    const [bookCoverUrl, setBookCoverUrl] = useState(null);
    const [publication_date, setPublication_date] = useState('');
    const [likes, setLikes] = useState(0);

    const convertToISODate = (dateStr) => {
        const [day, month, year] = dateStr.split('-');
        return new Date(`${year}-${month}-${day}T00:00:00Z`).toISOString();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('bookName', bookName);
        formData.append('author', author);
        formData.append('bookSummary', bookSummary);
        formData.append('genre', genre);
        formData.append('pdfFile', pdfFile);
        formData.append('bookCoverUrl', bookCoverUrl);

        const isoPublicationDate = convertToISODate(publication_date);
        formData.append('publication_date', isoPublicationDate);
        formData.append('likes', likes);

     
        try {
            const res = await axios.post('http://localhost:5555/api/v1/books/new', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
           
            setBookName('');
            setAuthor('');
            setBookSummary('');
            setGenre('');
            setPdfFile(null);
            setBookCoverUrl(null);
            setPublication_date('');
            setLikes(0);

            toast.success(res.data.message)
        } catch (err) {
            console.error(err);
            toast.error("Not Successfull")
        }
    };

    return (

        <div className="admin-main-box">
            <form className='adminform' onSubmit={handleSubmit}>
                <label htmlFor="">Book Name*</label>
                <input type="text" placeholder="Book Name" value={bookName} onChange={(e) => setBookName(e.target.value)} required />

                <label htmlFor="">Author Name*</label>
                <input type="text" placeholder="Author Name" value={author} onChange={(e) => setAuthor(e.target.value)} required />

                <label htmlFor="">Book Summary*</label>
                <textarea placeholder="BoOk summary in 100 words" value={bookSummary} onChange={(e) => setBookSummary(e.target.value)} required />

                <label htmlFor="">Genre*</label>
                <input placeholder="Genre: " value={genre} onChange={(e) => setGenre(e.target.value)} required />

                <label htmlFor="">Upload Book File* (.PDF)</label>
                <input className='uploadinput' type="file" onChange={(e) => setPdfFile(e.target.files[0])} required />

                <label htmlFor="">Upload Book Cover Image*(.PNG ,JPEG ,JPG)</label>
                <input className='uploadinput' type="file" onChange={(e) => setBookCoverUrl(e.target.files[0])} required />

                <label htmlFor="">Published Date (DD-MM-YYYY)*</label>
                <input type="text" placeholder="DD-MM-YYYY" value={publication_date} onChange={(e) => setPublication_date(e.target.value)} required />

                <label htmlFor="">Likes*</label>
                <input type="text" placeholder="Likes" value={likes} onChange={(e) => setLikes(e.target.value)} required />
                <br />
                <button className='admin-form-button' type="submit">Add Book</button>
                <p>Note:Kindly wait untill success or error message displayed</p>
            </form>
        </div>

    );
};

export default AddBook;
