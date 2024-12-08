
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';

function Linkpage() {
    const {id}  = useParams();
    async function GetLink() {
       
        
        try {
          const response = await fetch('http://127.0.0.1:8000/code', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({link : id }),
          
          });
          if (response.ok) {
            const data = await response.json();
            console.log(data)
            const link = data.uid;
            window.location.replace(link); // Redirect to the new link
        } else {
            console.error('Failed to fetch the link!');
            alert('Failed to fetch the link!');
        }
    }
          catch (error) {
            console.error('Error:', error);
        }
        };
        

    

    useEffect(() => {
      GetLink()
     },[]);
    return (<></>);
}

export default Linkpage;