

const Categories = () => {
    const data: {}[] = [
        {
          txt: "Programming",
        },
        {
          txt: "Data science",
        },
        {
          txt: "Technology",
        },
        {
          txt: "Self Improvement",
        },
        {
          txt: "Writing",
        },
        {
          txt: "Relationships",
        },
        {
          txt: "Machine Learning",
        },
        {
          txt: "Productivity",
        },
        {
          txt: "Politics",
        },
      ];
    
      const newData: {}[] = [
        {
          txt: "Help",
        },
        {
          txt: "Status",
        },
        {
          txt: "Writers",
        },
        {
          txt: "Blog",
        },
        {
          txt: "Careers",
        },
        {
          txt: "Privacy",
        },
        {
          txt: "Terms",
        },
        {
          txt: "About",
        },
        {
          txt: "Text to Speech",
        },
        {
          txt: "Teams",
        },
      ];
  return (
    <div className="w-[50%] h-[400px] sticky top-[80px] mt-[35px]">
        {/* main */}
        <div className="border-[#e4e2e2] border-b-[1px]">
            <div className="text-[15px] font-bold">Discover more of what matters to you</div>
            {/* hold */}
            <div className="w-[100%] flex flex-wrap my-[10px]">
                {data.map((el: any) => {
                    return <div className="bg-[#f2f2f2] py-[10px] px-[15px] rounded-[20px] flex text-[14px] mt-[10px] mr-[10px] hover:bg-[#d8d7d7] transition-all duration-500 items-center cursor-pointer font-[400]">{el.txt}</div>
                })}
            </div>
                <div className="my-[20px] font-[500] text-14px] text-[#349631]">See more topics</div>
        </div>
        {/* main */}
        <div className="flex flex-wrap my-[20px] text-[14px] text-[grey]">
        {newData.map((el: any) => {
                    return <div className="mr-[30px] mt-[10px]">{el.txt}</div>
                })}
        </div>
    </div>
  )
}

export default Categories