import React, { useState } from 'react'

const Search = ({request, setData, repoSearch = false, title}) => {
    const [formData, setformData] = useState({
        user:'',
        repo:''
    });
    const [error, setError] = useState(null);
    const handleChange = (e) => {
        let field = e.target.name;
        let val = e.target.value;
        setformData({
            ...formData,
            [field]:val
        });
        setData('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await request(formData.user,formData.repo).then(res => {
            setError(null);
            setData(res.data);
        }).catch(err => {
            setError(err)
        });
    }
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <nav className="panel">
                    <p className="panel-heading">
                        {title}
                    </p>
                    <div className="panel-block ">
                        <p className="control has-icons-right" style={{display: repoSearch && 'flex'}}>
                            <input className={repoSearch ? 'input mr-2' : "input"} type="text" placeholder="Enter a user..." name="user" onChange={(e) => handleChange(e)} />
                            {repoSearch && <input className="input mr-2" type="text" placeholder="Enter a repository..." name="repo" onChange={(e) => handleChange(e)} /> }
                            <button className="button is-black icon is-right is-clickable" type="submit">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </p>
                        
                    </div>
                    { error && <p className="notification is-danger pt-1 pb-1" > Oops... not found </p> } 
                </nav>
                           
            </form>
        </>
    )
}

export default Search