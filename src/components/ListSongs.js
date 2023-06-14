import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSongs() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong);
    handleSetSong(idSong);
  };
  useEffect(() => {
    setidSong(song.id);
  }, [song]);
  const [slectes, setSlectes] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="col-span-2 overflow-y-scroll">
      <div class="pt-2 relative mx-auto text-gray-600">
        <input
          class="d-inline border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <div class="pt-2 relative mx-auto text-gray-600">
          <h1>{slectes}</h1>
          <select
            className="d-inline border-1 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none "
            value={slectes}
            onChange={(event) => {
              setSlectes(event.target.value);
            }}
          >
            <option></option>
            <option>rock</option>
            <option>Pop</option>
            <option>Edm</option>
          </select>
        </div>
      </div>

      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">Type</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        {DataSongs.filter((val) => {
          if (searchTerm === "" && slectes === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase()) && val.type.toLowerCase().includes(slectes.toLowerCase())
          ) {
            return val;
          } 
        }).map((val, key) => {
          return (
            <thead className="text-white h-12">
              <tr
                key={key}
                className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${
                  idSong === val.id && "bg-slate-600 text-teal-400"
                }`}
                onClick={() => handlePlaySong(val.id)}
              >
                <td className="text-center">{key + 1}</td>
                <td>{val.name}</td>
                <td className="text-center">{val.author}</td>
                <td className="text-center">{val.type}</td>
                <td className="text-center">
                  <a href={val.url}>
                    <i className="fa fa-download"></i>
                  </a>
                </td>
              </tr>
            </thead>
          );
        })}
      </table>
    </div>
  );
}
