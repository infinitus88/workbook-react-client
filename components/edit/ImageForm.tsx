import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import bgimage from '../assets/image.svg';


const ImageForm = ({ image, setImage, isPending, setIsPending, setError }) => {

    // default img base64
    // setImage()

    const uploadImage = async (image) => {
        setError(false)
        setIsPending(true)
        const formData = new FormData()
        formData.append('image', image)
        //    try{
        //        const res = await fetch('http://localhost:5000/upload',{
        //        method : 'POST',
        //        body : formData,
        //        'content-type': 'multipart/form-data'
        //        })
        //        if(!res.ok){
        //         throw Error('Internal Server Error')
        //        }
        //        const data = await res.json()
        //        setUrl(data.path)
        //        setIsPending(false)
        //    }catch(error){
        //        console.log(error)
        //        setIsPending(false)
        //        setError(true)
        //    }
    }



    const onDrop = useCallback(async (acceptedFiles) => {

        let file = acceptedFiles[0]
        let reader = new FileReader()
        console.log(file);

        reader.readAsDataURL(file)
        reader.onload = () => {
            setImage(reader.result)
            // console.log(reader.result)
            // uploadImage(file)
        }

    }, [setImage])

    const { getRootProps, getInputProps, open } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: { 'image/*': [] },
        noClick: true,
        noKeyboard: true
    })

    return (
        <div className='flex flex-col drop-shadow-lg p-5 justify-between bg-white rounded-md'>
            <p className='text-center font-semibold text-lg md:text-xl mb-2'>Загрузите картинку</p>
            <p className='text-center font-thin text-xs text-slate-400 mb-2'>Файл должен быть Jpeg , Png...</p>
            <div  {...getRootProps({ className: 'bg-light-grey  rounded-md' })}>
                <input {...getInputProps({ name: 'image' })} />
                <img src={image} className='max-w-1/3 mx-auto mt-4' />
                <p className='text-slate-400 md:text-md text-center mt-4 text-sm'>Перетащите картинку</p>
            </div>
            <p className='text-center font-normal text-slate-400 text-md mt-2 mb-2'>Или</p>
            <button
                onClick={open}
                className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
            // onClick={() => setShowModal(false)}
            >
                Выберите файл
            </button>
            {/* <button onClick={open} className='bg-blue text-white font-normal p-1 rounded-lg w-auto mx-auto px-4 py-2 text-md'>Выберите файл</button> */}
        </div>
    )
}

export default ImageForm;