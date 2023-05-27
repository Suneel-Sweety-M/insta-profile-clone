import React, { useState } from 'react';
import { images,profile_details } from '../Data';
import './Posts.css';

const Posts = () => {
    const [view,setView] = useState(false);
    const [src,setSrc] = useState('');
    const [like,setLike] = useState(0);
    const [com,setCom] = useState('');

    const ImgView = (e) => {
        setView(true);
        setSrc(e.post);
        setLike(e.likes);
        setCom(e.comment);
    }

  return (
    <>
        <div className='posts'>
        {
            images.map((imag,index)=>(
                <div className="post" key={index} onClick={()=>ImgView(imag)}>
                    <img src={imag.post} alt="" />
                    <div className="post-info">
                        <b>{imag.likes} <i className="fa fa-light fa-heart"></i></b>
                        <b>{imag.comments} <i className="fa fa-light fa-comment"></i></b>
                    </div>
                </div>
            ))
        }
        </div>

        <div className="post-view" style={{display:view?'block':'none'}}>
            <b className="close" onClick={()=>setView(false)}>&times;</b>
            <div className="p-v-c">
                <div className="post-v-l">
                    <img src={src} alt="" />
                </div>
                <div className="post-v-r">
                    {
                        profile_details.map((pd,index)=>(
                            <div className="info" key={index}>
                                <img src={pd.pic} alt="" />
                                <div className="i">
                                    <b>{pd.b_name}</b>
                                    <p>{pd.t_name}</p>
                                </div>
                            </div>
                        ))
                    }<hr />
                    <div className="coment-box">
                        <h3>{com}</h3>
                    </div><hr />
                    <p>{like} likes</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Posts;