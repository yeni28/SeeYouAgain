import { useState } from 'react';
import DatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import { format } from 'date-fns';
type CalenderProps = {
    onChange?: (startDate: Date | null, endDate: Date | null) => void;
};

function Calender({ onChange }: CalenderProps) {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    function handleDateChange(update: [Date, Date]) {
        setStartDate(update[0]);
        setEndDate(update[1]);
        if (onChange) {
            onChange(update[0], update[1]);
        }
    }

    return (
        <div>
            <DatePicker locale={ko} inline={true} startDate={startDate} endDate={endDate} selectsRange onChange={handleDateChange} />
            <div className="mt-[.5rem] mb-4 px-2 py-1 text-center bg-lightgrey rounded-[.3rem]">
                {startDate && endDate ? (
                    <div className="grid grid-cols-2 ">
                        <p>
                            <span className="text-blue font-bold ">시작일</span> {format(startDate, 'yyyy.MM.dd', { locale: ko })}
                        </p>
                        <p>
                            <span className="text-blue font-bold">종료일</span> {format(endDate, 'yyyy.MM.dd', { locale: ko })}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 text-blue font-bold">
                        <p>
                            <span>시작일</span> <span className="text-lightgrey">2020.01.01</span>
                        </p>
                        <p>
                            <span>종료일</span> <span className="text-lightgrey">2020.01.01</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Calender;