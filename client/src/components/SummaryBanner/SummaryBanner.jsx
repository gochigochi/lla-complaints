
const SummaryBanner = () => {
    return (
        <div className="stats text-primary-content hadow-[0 0 20px rgba(255,255,255,0.35)] bg-white p-4 rounded-lg">
            <div className="stat">
                <div className="stat-title">Mesas escrutadas</div>
                <div className="stat-value">101.000</div>
                <div className="stat-actions">
                    <button className="btn btn-sm">Actualizar</button>
                </div>
            </div>

            <div className="stat">
                <div className="stat-title">Denuncias de fraude</div>
                <div className="stat-value">503</div>
                <div className="stat-actions">
                    <button className="btn btn-sm">Actualizar</button>
                </div>
            </div>

        </div>
    )
}

export default SummaryBanner