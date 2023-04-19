const TableData = ({data}) => {
    return (
        <>
        {
            data.map((currData) => {
                const {date, clicks, app_id, impressions, requests, responses, revenue} = currData;


                return (
                    <tr key={app_id}>
                        <td>{date}</td>
                        <td>{app_id}</td>
                        <td>{requests}</td>
                        <td>{responses}</td>
                        <td>{impressions}</td>
                        <td>{clicks}</td>
                        <td>{revenue}</td>
                    </tr>
                )
            })
        }
        </>
    )
}
export default TableData;