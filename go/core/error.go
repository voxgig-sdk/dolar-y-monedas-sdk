package core

type DolarYMonedasError struct {
	IsDolarYMonedasError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewDolarYMonedasError(code string, msg string, ctx *Context) *DolarYMonedasError {
	return &DolarYMonedasError{
		IsDolarYMonedasError: true,
		Sdk:              "DolarYMonedas",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *DolarYMonedasError) Error() string {
	return e.Msg
}
