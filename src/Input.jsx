import React from 'react'

export default function Input() {
    return (
        <>
            <tbody id="lista">
                <tr>
                    <th scope="row"></th>
                    <td>
                        <form /*onsubmit="nuevaEntrada()"*/>
                            <input type="text" autocomplete="off" required></input>
                            <input type="submit"></input>
                        </form>
                    </td>
                    <td colspan="3"></td>
                </tr>
            </tbody>
        </>
    )
}
