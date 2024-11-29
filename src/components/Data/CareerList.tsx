const CareerList = () => {
    return(
        <div>

            <div style={{marginBottom: '10px'}}>
                <table width="100%">
                    <tbody>
                    <tr>
                        <td style={{fontSize: '19px'}}>
                            <div>베어스치킨피자(사장)</div>
                        </td>
                        <td style={{textAlign: 'right'}}>
                            <div>2023.03-2024.05</div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <div>프렌차이즈화, 시장 분석, 비즈니스 전략 수립, 매장 관리, 주방 관리, 요리</div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>


            <div style={{marginBottom: '10px'}}>
                <table width="100%">
                    <tbody>
                    <tr>
                        <td style={{fontSize: '19px'}}>
                            <div>브라보치킨피자(사장)</div>
                        </td>
                        <td style={{textAlign: 'right'}}>
                            <div>2020.12-2023.03</div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <div>시장 분석, 비즈니스 전략 수립, 매장 관리, 주방 관리, 요리</div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>


            <div style={{marginBottom: '10px'}}>
                <table width="100%">
                    <tbody>
                    <tr>
                        <td style={{fontSize: '19px'}}>
                            <div>세민기공 기업부설연구소(연구원)</div>
                        </td>
                        <td style={{textAlign: 'right'}}>
                            <div>2019.03-2020.08</div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <div>페인트 연구 개발 및 친환경 인증 관리</div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default CareerList;