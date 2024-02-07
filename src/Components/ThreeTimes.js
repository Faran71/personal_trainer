import "./Table.css"

const ThreeTimes = () => {

    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Run</td>
                        <td>Chest</td>
                        <td>Back</td>
                        <td>Rest</td>
                        <td>Legs</td>
                        <td>Arms</td>
                        <td>Rest</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )

}

export default ThreeTimes;