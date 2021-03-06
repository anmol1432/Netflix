import React, { useState } from 'react'
import Card from "./Card";
import Async from "react-async";
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";

const axios = require('axios').default;
const CardSection = () => {
    // this link is come from redux store
    const link = useSelector(state => state.changeCardLink)
    const getdata = () => {
        let req = axios.get(link).then((response) => {
            return response.data.results
        }).catch((error) => {
            console.log(error)
        })
        return req
    }

    return (
        <>
            <div className="mainCardsection">
                <div className="card-section" id="card-section">
                    <Async promiseFn={getdata}>
                        {
                            ({ data, err, isLoading }) => {
                                if (isLoading) return (
                                    <>
                                        <Card
                                            img={''}
                                            vote={90} />

                                    </>
                                )
                                if (err) return err
                                if (data) return (
                                    data.map((val) => {
                                        return (
                                            <Card
                                                img={`https://image.tmdb.org/t/p/w500/${val.poster_path}`}
                                                vote={val.vote_average} />
                                        )
                                    })
                                )
                            }
                        }
                    </Async>
                </div>
            </div>
        </>
    )
}

export default CardSection;
// https://image.tmdb.org/t/p/w500//9kg73Mg8WJKlB9Y2SAJzeDKAnuB.jpg vote_average: 7.9
