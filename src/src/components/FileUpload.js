import React, { Fragment, useEffect, useState } from 'react';
import Message from './Message';
import axios from 'axios';
import PdfView from './pdfSinglePage';
import ProgressBar from 'react-bootstrap/ProgressBar';

const FileUpload = (props) => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [message, setMessage] = useState('');
  const [msgClass, setmsgClass] = useState('alert-info')
  const [renderPdf, setrenderPdf] = useState('')

  const onChange = e => {
    setFile(e.target.files[0]);                 //as multiple files are upload and we have to take the first file
    setFilename(e.target.files[0].name);        //to set the file name
    setShow(false);
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (props.selectedLanguages.languages.length !== 0) {
      const formData = new FormData();
      formData.append('file', file);
      console.log(props.selectedLanguages.languages)
      formData.append('languageSelected', props.selectedLanguages.languages)
      console.log(formData)
      setButtonClicked(true);
      setFormKey(formkey + 1);
      try {
        const res = await axios.post('http://localhost:8083/reportGeneration', formData, {
          // const res = await axios.post('http://localhost:8084/uploadfile', formData, {

          headers: {
            'Content-Type': 'multipart/form-data'
          },
        });

        setrenderPdf(res.data.data.pdfLink)
        console.log(res)
        setMessage(res.data.message)
        console.log(res.data);
        setmsgClass('alert-success')
        setButtonClicked(false);
        setFilename('Choose File');
        setShow(true);
      } catch (e) {
        console.log(e.response)
        if (e.response && e.response.data) {
          console.log(e.response.data.message)
          setMessage(e.response.data.message)
          setmsgClass('alert-danger')
          setButtonClicked(true);
        }
      }
    } else {
      setMessage('Please Select Language');
      setmsgClass('alert-danger')
      setButtonClicked(false);

    }
  };

  return (
    <Fragment>
      {message ? <Message msg={message} msgclass={msgClass} /> : null}
      <form key={formkey} className='form' onSubmit={onSubmit} >
        <div className='custom-file col-4'>
          <input type='file' className='custom-file-input' id='customFile' onChange={onChange} />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>
        <div className='ProgressBar mt-2 mb-2 col-4'>
          {(uploaded && <ProgressBar striped variant="success" now={uploaded} label={`${uploaded}%`} disabled={show} />)}
        </div>
        <div>
          {buttonClicked === false ? <input type='submit' value='Upload' className='btn btn-primary btn-block col-4' disabled={show} /> :
            <div class="spinner-border text-Dark" role="status">
            </div>}
        </div>
      </form>




      {renderPdf.length !== 0 ?
        <PdfView url={renderPdf} />
        : null}
    </Fragment>
  );
};

export default FileUpload;
