import AwardPoint from "./AwardPoint"
import Email from "./Email"
import MoneyAddNumberFormat from "./MoneyAddNumberFormat"
import SystemProducts from "./SystemProducts"
import SystemSalesConfiguration from "./SystemSalesConfiguration"
import SystemSettingPrefix from "./SystemSettingPrefix"
import SystemSiteConfiguration from "./SystemSiteConfiguration"
import WeighingScaleBarcode from "./WeighingScaleBarcode"

function SystemSettings() {
    return (
        <>
            <div className="container">
                <SystemSiteConfiguration />
                <SystemSalesConfiguration />
                <SystemProducts />
                <SystemSettingPrefix />
                <MoneyAddNumberFormat />
                <WeighingScaleBarcode />
                <Email />
                <AwardPoint />
            </div>
        </>
    )
}
export default SystemSettings