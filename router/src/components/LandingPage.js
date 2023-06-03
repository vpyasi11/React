import React, { useEffect, useState } from 'react'
// axios : library --> npm i axios then import
import axios from 'axios'
import '../css/LandingPage.css'

// use effect
// hook responsible for side effects (loading after all rendering) like api calling, some kind of dom manipulation
export default function LandingPage() {

    const [counter, setCounter] = useState(0)
    const [product, getProduct] = useState([])

    console.log("loads first");
    // console.log(document.querySelector(".header")) --> wont work as header not yet loaded

    // has a callback function and dependency array
    useEffect(() => {

        console.log("I am useEffect : loads in last after rendering all the content of this component");
        // console.log(document.querySelector(".header"))

        const apicalling = async () => {
            try {
                let response = await axios.get('https://dummyjson.com/products')
                console.log(response);
                getProduct(response.data.products)
            }
            catch (error) {
                console.log(error);
            }
        }

        apicalling()

    }, [])
    // [] :dependency array
    // case 1: dependency array is empty --> useffect runs only singlr time when the page renders
    // case 2: dependency array has some state or props --> whenever the state or props change, useffect will be trigerred that many times 

    console.log("loads second");
    console.log(product)

    return (
        <div className='header'>
            {/* <button onClick={() => { setCounter(counter + 1) }}>+</button>
            {counter} */}

            <div>
                {
                    // product.map(ele=>(<div> {ele.title}</div>))
                    product.length !== 0 ? product.map((element) => (
                        <div className='card'>
                            <img src={element.thumbnail} />
                            <div>
                            <div>{element.title}</div>
                            <div>{element.brand}</div>
                            </div>
                        </div>
                    )):<div>No products found</div>
                
                }

            </div>
        </div>
    )
}
