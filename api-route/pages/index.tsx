import { useRef, useState } from "react";

const HomePage = () => {
  const [feedbackValue, setFeedbackValue] = useState<
    {
      id: string;
      email: string;
      feedback: string;
    }[]
  >();
  const [feedbackDetail, setFeedbackDetail] = useState<
    {
      id: string;
      email: string;
      feedback: string;
    }[]
  >();
  const emailRef = useRef<HTMLInputElement>(null);
  const feedbackRef = useRef<HTMLTextAreaElement>(null);
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const email = emailRef.current!.value;
    const feedback = feedbackRef.current!.value;
    const data = {
      email,
      feedback,
    };
    fetch("api/feedback", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const loadHandler = () => {
    fetch("api/feedback")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFeedbackValue(data.result);
      });
  };
  const showDetail = (id: string) => {
    fetch(`api/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFeedbackDetail(data.result);
      });
  };

  console.log(feedbackDetail);

  return (
    <div>
      {feedbackDetail && <p>{feedbackDetail[0].email}</p>}
      Feedback Form
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="Email">Email</label>
          <input type="email" name="" id="" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">Feedback</label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            ref={feedbackRef}
          ></textarea>
        </div>
        <button>save</button>
      </form>
      <hr />
      <hr />
      <button onClick={loadHandler}>load Feedback</button>
      <ul>
        {feedbackValue?.map((data) => {
          return (
            <li key={data.id}>
              {data.feedback}{" "}
              <button onClick={showDetail.bind(null, data.id)}>
                {" "}
                showDetail
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
