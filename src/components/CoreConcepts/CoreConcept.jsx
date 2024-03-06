import {CORE_CONCEPTS} from "../../data.js"
import './coreConcepts.css'


export default function CoreConcept({image,title,description})
{
  return(<li>
          <img src={image} />
          <h3>{title}</h3>
          <p>{description}</p>
          </li>

  );
}