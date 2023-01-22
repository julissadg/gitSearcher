const Card = ({ data }) => {
    const {
        full_name = '',
        watchers = '',
        updated_at = '',
        subscribers_count = '',
        open_issues = '',
        language = '',
        html_url = '',
        forks = '',
        description = '',
        created_at = ''
    } = data;

    const dateFormat = (date) => new Date(date).toLocaleDateString('en-US');

    return (
        <div className="box mt-4 result-box">
            <div className="card-content">
                <div className="content">
                    <div className="tile is-ancestor">
                        <div className="tile is-vertical is-9">
                            <div className="tile">
                                <div className="tile is-parent is-vertical">
                                    <article className="tile is-child notification">
                                        <p className="title">{full_name}</p>
                                        <p className="subtitle is-6">Language: {language}</p>
                                    </article>
                                    <article className="tile is-child notification">
                                        <p className="title is-4">Details</p>
                                        <p className="subtitle is-6">{description}</p>
                                        <a href={html_url}>Go to git...</a></article>
                                </div>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child notification">

                                    <div className="is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-space-around	" >
                                        <p>Created at : {dateFormat(created_at)} </p>
                                        <p>Updated at : {dateFormat(updated_at)} </p>
                                    </div>
                                </article>

                            </div>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification ">
                                <div className="content">
                                    <div className="level-item has-text-centered mb-3">
                                        <div>
                                            <p className="heading">
                                            <i class="fa fa-eye mr-1" aria-hidden="true"/>
                                                watchers</p>
                                            <p className="title">{watchers} </p>
                                        </div>
                                    </div>
                                    <div className="level-item has-text-centered mb-3">
                                        <div>
                                            <p className="heading">
                                            <i class="fa fa-user-o mr-1" aria-hidden="true"/>
                                                subscribers count</p>
                                            <p className="title">{subscribers_count}</p>
                                        </div>
                                    </div>
                                    <div className="level-item has-text-centered mb-3">
                                        <div>
                                            <p className="heading">
                                            <i class="fa fa-exclamation mr-1" aria-hidden="true"/>
                                                open issues</p>
                                            <p className="title">{open_issues}</p>
                                        </div>
                                    </div>
                                    <div className="level-item has-text-centered mb-3">
                                        <div>
                                            <p className="heading">
                                            <i class="fa fa-code-fork mr-1" aria-hidden="true"/>
                                                forks</p>
                                            <p className="title">{forks}</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Card;
