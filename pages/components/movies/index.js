import React from 'react'
import styles from '../../../styles/Home.module.css'

export default class Movies extends React.PureComponent {

    render() {

        const {
            movies
        } = this.props;

        return (
            movies && movies.length > 0 && movies.map((m) => {
                return (
                    <div ref={m.id} className={styles.movieInfo}>
                        <img src={m.poster.uri.replace('100', '500')} alt="" />
                        <div>
                            <a className={styles.movieName} href={m.variants[0].amenityGroups[0].showtimes[0].ticketingJumpPageURL} target="_blank">
                                {m.title}
                            </a>
                            <p className={styles.movieRate}>({m.rating})</p>
                        </div>
                    </div>
                )
            })
        )
    }
}