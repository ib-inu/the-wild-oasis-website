import SpinnerMini from "../_components/SpinnerMini"

export default function loading() {
    return <div className="grid items-center justify-center">
        <SpinnerMini />
        <p className="text-xl text-primary-200">Loading Cabins data...</p>

    </div>
}


