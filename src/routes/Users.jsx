import React from 'react'
import { useState } from 'react';
import Card from '../components/Card';
import Search from '../components/Search'
import { getUser } from '../services/api.user';

const Users = () => {
  const [data, setData] = useState('');
  const {
    avatar_url = '',
    bio = '',
    blog = '',
    email = '',
    followers = '',
    following = '',
    html_url = '',
    location = '',
    name = '',
    public_repos = '',
    public_gists = '',
    twitter_username = ''
  } = data;

  return (
    <>
      <div className="container mt-4">
        <Search request={getUser} setData={setData} title="Search a User" />
        <div className="box mt-4 result-box" style={{ display: !data && 'none' }}>
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-4">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child notification has-text-centered is-flex-direction-column is-align-items-center">
                    <figure className="image is-128x128 is-inline-block ">
                      <img className="is-rounded" src={avatar_url} />
                    </figure>
                    <h2 className="title is-2">{name} </h2>
                    <div className="media-content">
                      {twitter_username && <p className="subtitle is-5 mb-2">
                        <i className="fa fa-twitter" aria-hidden="true" />
                        @{twitter_username}
                      </p>}
                      {blog && <p className="subtitle is-5 mb-2 ">
                        <i className="fa fa-rss mr-1" aria-hidden="true" />
                        {blog}
                      </p>}
                      {html_url && <p className="subtitle is-5 mb-2 ">
                        <i className="fa fa-github-alt mr-1" aria-hidden="true" />
                        {html_url}
                      </p>}
                      {email && <p className="subtitle is-5 mb-2 ">
                        <i className="fa fa-envelope" aria-hidden="true" />
                        {email}
                      </p>}
                    </div>
                  </article>
                </div>
              </div>
              {location && <div className="tile is-parent">
                <article className="tile is-child notification">
                  <div className="content">
                    <p className="subtitle is-5 mb-2 ">
                      <i className="fa fa-map-marker mr-2" aria-hidden="true" />
                      {location}
                    </p>
                  </div>
                </article>
              </div>}
            </div>
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification">
                <div className="content">
                  <nav className="level">
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">
                        <i class="fa fa-users mr-1" aria-hidden="true"/>
                          Followers</p>
                        <p className="title">{followers} </p>
                      </div>
                    </div>
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">
                        <i class="fa fa-user mr-1" aria-hidden="true"/>
                          Following</p>
                        <p className="title">{following}</p>
                      </div>
                    </div>
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">
                        <i class="fa fa-unlock mr-1" aria-hidden="true"/>
                          Public gists</p>
                        <p className="title">{public_gists}</p>
                      </div>
                    </div>
                    <div className="level-item has-text-centered">
                      <div>
                        <p className="heading">
                        <i class="fa fa-unlock mr-1" aria-hidden="true"/>
                          Public repos</p>
                        <p className="title">{public_repos}</p>
                      </div>
                    </div>
                  </nav>
                </div>
              </article>
              {bio && <article className="tile is-child notification">
                <p className="title is-4">About</p>
                <p className="subtitle is-4">{bio}</p>
              </article>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Users;
