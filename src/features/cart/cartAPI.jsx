export function fetchCart(amount = 1){
    return new Promise((resolve) => {
    const response = await fetch('http://localhost:8080')
    const data = await response.json()
    resolve({data})
    }
    );
}