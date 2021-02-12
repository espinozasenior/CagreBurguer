import React from 'react'
import { FormFields } from '../../components/CommonForm'

const SignUpFormContainer = () => {
    return (
        <FormFields>
            <p className="text-lg font-bold">
                Aún no se puede registrar
            </p>
            <p className="mt-2 text-gray-500">
                De momento esta sección está en proceso de implementación.
            </p>
        </FormFields>
    )
}

export default SignUpFormContainer
