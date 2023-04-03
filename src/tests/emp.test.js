import { render, screen } from '@testing-library/react';
import { Emplist } from "../components/components";
import {mockEmpData} from "./mockdata";

test("List renders successfully", () => {
    render(<Emplist data={mockEmpData}/>);
    expect(screen.getByText(/Job2/i)).toBeInTheDocument();
})


