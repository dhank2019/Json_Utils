import React, { useState } from 'react';

export default function Table(props) {
    const data = JSON.parse(props.data);
    const keyObj = Object.keys(data[0]);
    const getRow = (data) => {
        var cols = '';
        for (var i = 0; i < keyObj.length; i++) {
            cols += (
                <th>data[keyObj[i]]</th>
            )
        }
        return cols;


    }
    return (
        <>
        <div className='container'>
            <table className="table table-bordered">
                <tbody>
                    {data.map(function (object, i) {
                        return <tr>
                            {keyObj.map(function (keyObject, j) {
                                return <th scope='col'>{object[keyObj[j]]}</th>;
                            })}
                        </tr>

                    })}


                </tbody>
            </table>
            </div>
        </>
    )
}
