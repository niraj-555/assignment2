import React from "react";

const List = () => {
  return (
    <>
      <h3>Welcome to online academy! Various courses are listed below : </h3>
      <ol type="a">
        <li>
          <ol type="i">
            Programming course:
            <li>
              Front end
              <ol type="1">
                <li>HTML5</li>
                <li>JavaScript</li>
                <li>JSX</li>
                <li>TypeScript</li>
              </ol>
            </li>
            <li>
              Middle ware
              <ol type="1">
                <li>Java</li>
                <li>C#</li>
              </ol>
            </li>
            <li>
              Back end
              <ol type="1">
                <li>
                  DataBase
                  <ol type="a">
                    <li>
                      RDBMS
                      <ol type="i">
                        <li>Oracle</li>
                      </ol>
                    </li>
                    <li>
                      NOSQL
                      <ol type="i">
                        <li>MongoDB</li>
                      </ol>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
    </>
  );
};

export default List;
