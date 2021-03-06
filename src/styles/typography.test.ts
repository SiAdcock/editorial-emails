import { guTextSans } from "./typography";

test("typography", () => {
    const got = guTextSans({ level: 1 });
    const want = {
        fontFamily:
            "GuardianTextSans, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
        fontSize: "12px",
        lineHeight: "1.45em",
        fontWeight: 400
    };

    expect(got).toEqual(want);
});
