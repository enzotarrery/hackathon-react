import React from 'react'

const Table = (props) => {

    /* Render */
    return (
        <section className='table__container'>
            {
                props.data === 'payments' &&
                <table className='table'>
                <thead className='table__header'>
                    <tr className='table__row'>
                        <th className='table__head'>#ID</th>
                        <th className='table__head'>Date</th>
                        <th className='table__head'>Horaire</th>
                        <th className='table__head'>Nom</th>
                        <th className='table__head'>Prénom</th>
                        <th className='table__head'>Niveau</th>
                    </tr>
                </thead>
                <tbody className='table__content'>
                    <tr className='table__row'>
                    <   td className='table__cell'>1343</td>
                        <td className='table__cell'>19 aug, 2021</td>
                        <td className='table__cell'>Will</td>
                        <td className='table__cell'>Samuel</td>
                        <td className='table__cell'>samuel@gmail.com</td>
                        <td className='table__cell table__cell--icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </td>
                    </tr>
                    <tr className='table__row'>
                        <td className='table__cell'>6543</td>
                        <td className='table__cell'>10 nov, 2021</td>
                        <td className='table__cell'>Peilc</td>
                        <td className='table__cell'>Niles</td>
                        <td className='table__cell'>niles@gmail.com</td>
                        <td className='table__cell table__cell--icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </td>
                    </tr>
                    <tr className='table__row'>
                        <td className='table__cell'>87543</td>
                        <td className='table__cell'>01 oct, 2021</td>
                        <td className='table__cell'>Landy</td>
                        <td className='table__cell'>Lucas</td>
                        <td className='table__cell'>lucas@gmail.com</td>
                        <td className='table__cell table__cell--icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </td>
                    </tr>
                    <tr className='table__row'>
                        <td className='table__cell'>9857</td>
                        <td className='table__cell'>03 oct, 2021</td>
                        <td className='table__cell'>Filai</td>
                        <td className='table__cell'>Lucie</td>
                        <td className='table__cell'>lucie@gmail.com</td>
                        <td className='table__cell table__cell--icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </td>
                    </tr>
                    <tr className='table__row'>
                        <td className='table__cell'>1081</td>
                        <td className='table__cell'>06 oct, 2021</td>
                        <td className='table__cell'>Gori</td>
                        <td className='table__cell'>Hugo</td>
                        <td className='table__cell'>gori@gmail.com</td>
                        <td className='table__cell table__cell--icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </td>
                    </tr>
                </tbody>
            </table>
            }
            {
                props.data === 'courses' &&
                <table className='table'>
                <thead className='table__header'>
                    <tr className='table__row'>
                        <th className='table__head'>#ID</th>
                        <th className='table__head'>Membre depuis</th>
                        <th className='table__head'>Nom</th>
                        <th className='table__head'>Prénom</th>
                        <th className='table__head'>Email</th>
                        <th className='table__head'>Paiement</th>
                    </tr>
                </thead>
                <tbody className='table__content'>
                    <tr className='table__row'>
                    <   td className='table__cell'>1343</td>
                        <td className='table__cell'>19 aug, 2021</td>
                        <td className='table__cell'>8h00</td>
                        <td className='table__cell'>Will</td>
                        <td className='table__cell'>Samuel</td>
                        <td className='table__cell table__cell--icon'>Débutant</td>
                    </tr>
                    <tr className='table__row'>
                        <td className='table__cell'>6543</td>
                        <td className='table__cell'>10 nov, 2021</td>
                        <td className='table__cell'>10h30</td>
                        <td className='table__cell'>Peilc</td>
                        <td className='table__cell'>Niles</td>
                        <td className='table__cell table__cell--icon'>Moyen</td>
                    </tr>
                    <tr className='table__row'>
                        <td className='table__cell'>87543</td>
                        <td className='table__cell'>01 oct, 2021</td>
                        <td className='table__cell'>9h00</td>
                        <td className='table__cell'>Landy</td>
                        <td className='table__cell'>Lucas</td>
                        <td className='table__cell table__cell--icon'>Moyen</td>
                    </tr>
                    <tr className='table__row'>
                        <td className='table__cell'>9857</td>
                        <td className='table__cell'>03 oct, 2021</td>
                        <td className='table__cell'>15h00</td>
                        <td className='table__cell'>Filai</td>
                        <td className='table__cell'>Lucie</td>
                        <td className='table__cell table__cell--icon'>Moyen</td>
                    </tr>
                    <tr className='table__row'>
                        <td className='table__cell'>1081</td>
                        <td className='table__cell'>06 oct, 2021</td>
                        <td className='table__cell'>16h00</td>
                        <td className='table__cell'>Gori</td>
                        <td className='table__cell'>Hugo</td>
                        <td className='table__cell table__cell--icon'>Débutant</td>
                    </tr>
                </tbody>
            </table>
            }
        </section>
    );
}

export default Table;