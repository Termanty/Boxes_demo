function Main({firm}) {
    const employees = firm.map(e => <Box employee={e}></Box>)
    return (
      <main>
        {employees}
      </main>
    )
  }

  function Box({employee}) {
    return (
      <div class="box">
          <h2>{employee.name}</h2>
          <p>Title: {employee.title}</p>
          <p>Age: {employee.age}</p>
      </div>
    )
  }

  export default Main;