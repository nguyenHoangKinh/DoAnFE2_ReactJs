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
      <form class="flex items-center m-5 ">
        <label for="simple-search" class="sr-only">
          Search
        </label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="search"
            name="search"
            placeholder="Search"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
      </form>
      <div class="pt-2  ">
          <select
            className=" bg-gray-50 border rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-5 pr-5 ml-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">Type</th>
            <th className="w-[10%]">Download</th>
          </tr>
        </thead>
        {DataSongs.filter((val) => {
          if (searchTerm === "" && slectes === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            val.type.toLowerCase().includes(slectes.toLowerCase())
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
