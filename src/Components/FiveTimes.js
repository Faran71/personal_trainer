import "./Table.css"

const FiveTimes = () => {

    return(
        <div>
            <table className="table">
                <tr>
                    <th>Monday</th>
                    <td>Chest and Back</td>
                </tr>
                <tr>
                    <th>Tuesday</th>
                    <td>Arms and Shoulders</td>
                </tr>
                <tr>
                    <th>Wednesday</th>
                    <td>Rest</td>
                </tr>
                <tr>
                    <th>Thursday</th>
                    <td>Legs</td>
                </tr>
                <tr>
                    <th>Friday</th>
                    <td>Chest and Arms</td>
                </tr>
                <tr>
                    <th>Saturday</th>
                    <td>Back and Shoulders</td>
                </tr>
                <tr>
                    <th>Sunday</th>
                    <td>Rest</td>
                </tr>
            </table>

        </div>
    )

}

export default FiveTimes;