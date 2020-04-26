import React from "react";
import { connect } from "react-redux";
import Rating from "./rating";
import { removemovie } from "../Action/action";
import Modall from "./modall";
import {Link} from 'react-router-dom'

function MovieCard(props) {
  const { movie } = props;

  return (
    <div className="card">
      <Rating count={movie.star} />
      <img src={movie.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movie.name}</h5>
        <p className="card-text">{movie.year}</p>

        <button
          className="btn btn-danger btn"
          onClick={() => props.removemovie(movie.id)}>
          Remove
        </button>
        <Modall name="Edit" movie={movie} />

        <div>
          <Link to={`/description/${movie.id}`}>  
          <button
            type="button"
            class="btn btn-success"
           
            data-target=".bd-example-modal-sm">
            Description
          </button>
          </Link>

          <div
            class="modal fade bd-example-modal-sm"
            tabindex="-1"
            role="dialog"
            aria-labelledby="mySmallModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-sm">
              <div class="modal-content">{movie.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default connect(null, { removemovie })(MovieCard);
