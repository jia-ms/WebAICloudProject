import io

import pandas as pd
from fastapi import FastAPI, File, HTTPException, UploadFile

app = FastAPI(title="DataGuard API")

MAX_BYTES = 50 * 1024 * 1024  # 50 MB


@app.get("/api/health")
def health():
    return {"status": "ok"}


@app.post("/api/upload")
async def upload(file: UploadFile = File(...)):
    if not file.filename or not file.filename.lower().endswith(".csv"):
        raise HTTPException(400, "Only CSV files are supported for now.")

    contents = await file.read()
    if len(contents) > MAX_BYTES:
        raise HTTPException(413, "File too large (max 50 MB).")

    try:
        df = pd.read_csv(io.BytesIO(contents))
    except Exception as e:
        raise HTTPException(400, f"Could not read CSV: {e}")

    return {
        "filename": file.filename,
        "rows": len(df),
        "columns": [
            {"name": col, "dtype": str(df[col].dtype), "nulls": int(df[col].isna().sum())}
            for col in df.columns
        ],
        "preview": df.head(5).astype(str).to_dict(orient="records"),
    }