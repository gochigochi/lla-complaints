import { lazy } from "react"
import { PhotoIcon } from "@heroicons/react/24/outline"
import { ErrorBoundary } from "react-error-boundary"
import { Form, useActionData, useNavigation } from "react-router-dom"
const GeneralError = lazy(() => import("../Errors/GeneralError/GeneralError"))
const Modal = lazy(() => import("../Modal/Modal"))

const ComplaintForm = () => {
    const response = useActionData()
    const { state } = useNavigation()

    const resetResponse = () => response.success = false

    console.log("FORM RESTURNS.......", response)
    console.log("STATE......", state)

    return (
        <ErrorBoundary fallback={<GeneralError />}>
            { response?.success ? <Modal resetResponse={resetResponse} /> : null }
            <div className="max-w-[25rem] mx-auto px-[1rem]">
                <div>ComplaintForm</div>
                <Form method="post" actions="/denuncia" >
                    <div className="space-y-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="full_name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Nombre completo
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="full_name"
                                        id="full_name"
                                        autoComplete="name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="dni" className="block text-sm font-medium leading-6 text-gray-900">
                                    DNI
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="dni"
                                        id="dni"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="school" className="block text-sm font-medium leading-6 text-gray-900">
                                    Escuela
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="school"
                                        id="school"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="table" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mesa
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="table"
                                        id="table"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                    Ciudad
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="province" className="block text-sm font-medium leading-6 text-gray-900">
                                    Provincia
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="province"
                                        id="province"
                                        autoComplete="address-level1"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="postal_code" className="block text-sm font-medium leading-6 text-gray-900">
                                    Código postal
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="postal_code"
                                        id="postal_code"
                                        autoComplete="postal-code"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-full">
                                    <label htmlFor="complaint" className="block text-sm font-medium leading-6 text-gray-900">
                                        Detalles del fraude
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="complaint"
                                            name="complaint"
                                            rows={3}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                                {/* <div className="col-span-full">
                                    <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                        Imagen del fraude
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center">
                                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                >
                                                    <span>Subir archivo</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                </label>
                                                <p className="pl-1">o arrastre y suelte</p>
                                            </div>
                                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF hasta 10MB</p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>

                        </div>

                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className={`rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${state === "submitting" && "hover:bg-indigo-200 bg-indigo-200 cursor-not-allowed"}`}
                        >
                            Enviar
                        </button>
                    </div>
                    {/* <span className={`text-sm text-red-600 ${!response?.error && "hidden"}`}>error</span> */}
                </Form>
            </div>
        </ErrorBoundary>
    )
}

export default ComplaintForm