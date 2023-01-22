import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-dashboard-container" >
      <p className="title home-dashboard-title">What are you looking for?</p>
      <div className="container mt-4 home-dashboard">
        <div class="tile is-ancestor">
          <div class="tile is-parent item-dashboard">
            <Link to={`/users`}>
              <article class="tile is-child notification is-black">
                <div class="content">
                  <p class="title">Try to find a user...</p>
                  <i class="fa fa-id-card fa-5x" aria-hidden="true" />
                  <div class="content">
                  </div>
                </div>
              </article>
            </Link>
          </div>
          <div class="tile is-parent item-dashboard">
            <Link to={`/repositories`}>
              <article class="tile is-child notification is-black">
                <div class="content">
                  <p class="title">Try to find a repository...</p>
                  <i class="fa fa-github-alt fa-5x" aria-hidden="true" />
                  <div class="content">
                  </div>
                </div>
              </article>
            </Link>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Home