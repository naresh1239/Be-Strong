import React, { useState, useEffect } from 'react'
import "./components-css/Todo.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = () => {

    const [title, settitle] = useState()
    const [pregragh, setpregragh] = useState();
    const [data, setdata] = useState([]);

    let hours = new Date().getHours();
    let minuts = new Date().getMinutes();
    let dates = new Date().getDate()
    let month = new Date().getMonth() + 1
    let fullyear = new Date().getFullYear()

    let fulldate = (`${dates}/${month}/${fullyear}`)
    let fulltime = (`${hours}.${minuts}`)

    let obj = {
        title: title,
        pregragh: pregragh,
        time: fulltime,
        date: fulldate,
    }

    //  creat function
    const add = () => {
         let localtextarry
        let localdata = localStorage.getItem("localdata");

        if (localdata == null) {
            localtextarry = [];

        } else {
            localtextarry = JSON.parse(localdata);
        }
        if (!title == "") {
            localtextarry.push(obj);
        } else {
            toast.error('🦄 Plz enter something!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

        localStorage.setItem("localdata", JSON.stringify(localtextarry))
        setdata(localtextarry)
        settitle("")
        setpregragh("")
    }
    // show function
    useEffect(() => {
        let localtextarry
        let localdata = localStorage.getItem("localdata");

        if (localdata == null) {
            localtextarry = [];

        } else {
            localtextarry = JSON.parse(localdata);
        }

        setdata(localtextarry)


    }, [])
    //  delete function
    // const deletecard = (no) =>{

    // }
    const delcard = (no) => {

        console.log(no);
        let localtextarry;
        let localdata = localStorage.getItem("localdata");

        if (localdata == null) {
            localtextarry = [];

        } else {
            localtextarry = JSON.parse(localdata);

        }

        localtextarry.splice(no, 1);
        localStorage.setItem("localdata", JSON.stringify(localtextarry))

        setdata(localtextarry)
        toast.success('🦄 one card deleted!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    }
    function clearall() {
        toast.success('🦄 all cards deleted!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });


         let localtextarry
         let localdata = localStorage.getItem("localdata");


         if (localdata == null) {
             localtextarry = [];

         } else {
             localtextarry = JSON.parse(localdata);
         }
         localtextarry = [];

        localStorage.setItem("localdata", JSON.stringify(localtextarry))
        setdata(localtextarry)


    }

    return (
        <>
    
            <section className="section-todo">
                <div className="container">
                    <div className="row pt-5 mt-5">
                        <div className="col-12 text-center">
                            <h5 className='be-healthy todo-h5 '>Make a promise for next week</h5>
                        </div>
                    </div>
                <h1 className='be-healthy-todo'>BE HEALTHY</h1>
                    <div className="row">
                        <div className="col-12 text-center py-5">

                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12 pb-5">
                            <div className="todo-box mx-auto">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                                    <input type="text" autoComplete="off" className="form-control shadow-none" id="exampleFormControlInput1" onChange={(e) => settitle(e.target.value)} value={title} placeholder="Add Your Title Here" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">What Your Challenge Of The Week</label>
                                    <textarea className="form-control shadow-none" onChange={(e) => setpregragh(e.target.value)} value={pregragh} id="exampleFormControlTextarea1" rows="4"></textarea>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <i className="bi bi-file-earmark-plus fs-3 px-3" onClick={add}></i>
                                    <i className="bi bi-trash fs-3 " onClick={clearall}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-auto">

                        {

                            data.map((element, no) => {
                                return (
                                    <div className="col-lg-4 col-md-6  col-12 py-md-3 my-md-5 my-1 py-1" key={no} >
                                        <div className="card mx-auto" style={{ width: 18 + 'rem' }}>
                                            <div className="card-body">
                                                <h5 className="card-title"><h5 className='welcome'>{`week of the challenge no ${no + 1}`}</h5></h5>
                                                <h6 className="card-subtitle mb-2 text-muted">{element.title}</h6>
                                                <p className="card-text">{element.pregragh}</p>
                                                <i className="bi bi-trash-fill" onClick={() => delcard(no)}></i>
                                                <div className="d-flex justify-content-between">
                                                    <p> time-{element.time}</p>
                                                    <p>date-{element.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                   
                </div>
            </section>
            <ToastContainer />

        </>
    )
}

export default Todo
