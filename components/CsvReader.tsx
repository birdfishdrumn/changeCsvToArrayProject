import { useState } from 'react'

export default function CsvReader(){
    const [csvFile, setCsvFile] = useState(null);
    const [csvArray, setCsvArray] = useState([]);
    // [{name: "", age: 0, rank: ""},{name: "", age: 0, rank: ""}]

  const processCSV = (text: string | ArrayBuffer) => {
    if (typeof text === "string") {
      const dataArray = [];
      const dataString = text.split('\n');
      for (let i = 0; i < dataString.length; i++) {
        dataArray[i] = dataString[i].split(',');
      }
      setCsvArray(dataArray)
    }
    }

    const submit = () => {
        const file = csvFile;
        const reader = new FileReader();

        reader.onload = function(e) {
            const text = e.target.result;
            console.log(text);
            processCSV(text)
        }

        reader.readAsText(file);
    }

    return(
        <form id='csv-form'>
            <input
                type='file'
                accept='.csv'
                id='csvFile'
                onChange={(e) => {
                    setCsvFile(e.target.files[0])
                }}
            >
            </input>
            <br/>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    if(csvFile)submit()
          }}
          className="bg-gray-300 px-4 py-3 rounded-full my-4 pointer hover:bg-green-500 hover:text-white font-bold transition duration-400"
            >
                Submit
            </button>
            <br/>
            <br/>
            {csvArray.length>0 ?
            <>
                <table>
                    <thead>
                        <th>配列一覧</th>
                    </thead>
                    <tbody>
                        {
                            JSON.stringify(csvArray)
                        }
                    </tbody>
                </table>
            </> : null}
        </form>
    );

}
