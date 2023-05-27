import React from 'react';
import { profile_details } from '../Data';
import './Headder.css';

const Headder = () => {
  return (
    <div className='Profile-info'>
        {
            profile_details.map((data, index)=>
            (<div key={index} className='profile'>
                <div className='prof-top'>
                    <div className="pic">
                        <img src={data.pic} alt="" />
                    </div>
                </div>
                
                <div className='prof-btm'>
                    <h2 className="m-name">
                        {data.b_name}
                    </h2>
                    <div className="follow">
                        <p><b>{data.posts}</b> posts</p>
                        <p><b>{data.followers}</b> followers</p>
                        <p><b>{data.following}</b> following</p>
                    </div>
                    <h3 className="s-name">
                        {data.t_name}
                    </h3>
                    <p>{data.bio}</p>
                </div>
            </div>))
        }
    </div>
  )
}

export default Headder;