import { memo } from "react"

const CustomInput = ({label, name, type, register, required, errors, leftSection, ...rest}) => (
    <div className=" mb-3">
        {label&&<label className="form-label">{label}</label>}
        <div className="input-group">
            {type !== 'textarea'
                ? <input type={type} name={name} {...register(name, {required})} {...rest} />
                : <textarea rows="10" name={name} {...register(name, {required})} {...rest} ></textarea> 
            }
            {leftSection}
        </div>
    </div>
)

export default memo(CustomInput);
