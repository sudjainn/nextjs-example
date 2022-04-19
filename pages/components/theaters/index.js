import React from 'react'
import Movies from '../movies'
import styles from '../../../styles/Home.module.css'

export default class Theaters extends React.PureComponent {

    render() {

        const {
            theaters
        } = this.props;

        const filterTheaters = theaters && theaters.length > 0 ? theaters.filter(th => th.movies && th.movies.length > 0) : []

        return (
            filterTheaters && filterTheaters.length > 0 &&
            <div className={styles.section}>
                {filterTheaters.map((t) => {
                    return (
                        <div ref={t.id} className={styles.box}>
                            <h4 className={styles.name}>{t.name}</h4>
                            <p className={styles.address}>{t.address1} {t.address2} {t.cityStateZip}</p>
                            <div className={styles.movieBox}>
                                <Movies movies={t.movies} />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}