import "./Table.css"

const FourTimes = () => {

    return(
        <div>
            <table className="table">
                <tr>
                    <th>Monday</th>
                    <td>Run</td>
                </tr>
                <tr>
                    <th>Tuesday</th>
                    <td>Chest and Arms</td>
                </tr>
                <tr>
                    <th>Wednesday</th>
                    <td>Back and Shoulders</td>
                </tr>
                <tr>
                    <th>Thursday</th>
                    <td>Rest</td>
                </tr>
                <tr>
                    <th>Friday</th>
                    <td>Legs</td>
                </tr>
                <tr>
                    <th>Saturday</th>
                    <td>Chest and Back</td>
                </tr>
                <tr>
                    <th>Sunday</th>
                    <td>Rest</td>
                </tr>
            </table>

        </div>
    )

}

export default FourTimes;