import React, { useState } from 'react';
import axios from '../api/axios';
import { Camera, Upload, RefreshCw, AlertCircle, CheckCircle2 } from 'lucide-react';

const PlantDoctor = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
            setResult(null);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) return;
        setLoading(true);
        
        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('/disease/predict', formData);
            setResult(response.data.prediction);
        } catch (error) {
            console.error("Error uploading image", error);
            alert("የግንኙነት ስህተት ተከስቷል። (Connection Error)");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800">Digital Plant Doctor</h2>
                <p className="text-sm text-gray-500">ተክልዎን ፎቶ ያንሱና በሽታውን ይለዩ</p>
            </div>

            {/* Image Preview Area */}
            <div className="relative w-full aspect-square bg-gray-100 rounded-3xl border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                {preview ? (
                    <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                    <div className="text-center space-y-2">
                        <Camera size={48} className="mx-auto text-gray-400" />
                        <p className="text-xs text-gray-400">Click below to take photo</p>
                    </div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
                <label className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-ethio-green text-ethio-green p-4 rounded-2xl font-bold cursor-pointer hover:bg-green-50">
                    <Upload size={20} />
                    <span>ምረጥ (Pick)</span>
                    <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
                </label>
                
                <button 
                    onClick={handleUpload}
                    disabled={!selectedFile || loading}
                    className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-2xl font-bold transition-all ${
                        loading || !selectedFile ? 'bg-gray-300 text-gray-500' : 'bg-ethio-green text-white shadow-lg shadow-green-200'
                    }`}
                >
                    {loading ? <RefreshCw className="animate-spin" /> : <CheckCircle2 size={20} />}
                    <span>መርምር (Scan)</span>
                </button>
            </div>

            {/* Results Area */}
            {result && (
                <div className="bg-white border border-green-100 rounded-3xl p-6 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold text-green-600 uppercase tracking-widest">Diagnosis Result</span>
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-1">{result.disease_amharic}</h3>
                    <p className="text-sm text-gray-500 mb-4 italic">{result.disease_english} ({result.confidence} Match)</p>
                    
                    <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-2xl">
                            <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">ምልክቶች (Symptoms)</h4>
                            <p className="text-sm text-gray-700 leading-relaxed">{result.description}</p>
                        </div>
                        
                        <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
                            <h4 className="text-xs font-bold text-ethio-green uppercase mb-2">መፍትሄ (Treatment)</h4>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                                {result.treatment_steps.map((step, idx) => (
                                    <li key={idx} className="leading-snug">{step}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlantDoctor;