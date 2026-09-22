#!/usr/bin/env python3
"""Generate downloadable .ipynb notebooks for the Quantum Labs.

Content is written from scratch for this site (own prose, own code).
Only execution *outputs* reuse factual results (counts, versions, diagrams),
which are facts, not copyrightable expression. Never paste prose from the
uploaded lab zips or the Qiskit textbook into the cell sources here.
"""
import json
import os

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "downloads")


def md(lines):
    if isinstance(lines, str):
        lines = [lines]
    return {"cell_type": "markdown", "metadata": {}, "source": lines}


def code(source, output=None):
    if isinstance(source, str):
        source = [source]
    cell = {
        "cell_type": "code",
        "execution_count": None,
        "metadata": {},
        "source": source,
        "outputs": [],
    }
    if output is not None:
        if isinstance(output, str):
            output = [output]
        cell["outputs"] = [{"output_type": "stream", "name": "stdout", "text": output}]
    return cell


def notebook(cells, lang="en"):
    return {
        "nbformat": 4,
        "nbformat_minor": 5,
        "metadata": {
            "kernelspec": {"display_name": "Python 3", "language": "python", "name": "python3"},
            "language_info": {"name": "python", "version": "3.11.0"},
            "qlh": {"lab": "lab-01-first-circuit", "lang": lang,
                    "note": "Companion notebook for Quantum Learning Hub Lab 01. Written from scratch."},
        },
        "cells": cells,
    }


def lab01_en():
    return notebook([
        md("# Lab 01 — Your first quantum circuit\n"
           "\n"
           "Set up Python and Qiskit, build a 1-qubit circuit, run it on a simulator, "
           "and watch superposition show up in the measurement counts."),
        md("## Step 1 — Get Python\n"
           "\n"
           "Everything here runs on Python 3.10+. The Anaconda distribution bundles Python "
           "plus the scientific tools, or grab Python directly from python.org."),
        code("!python --version\n# you want to see: Python 3.10 (or newer)",
             "Python 3.11.9\n"),
        md("## Step 2 — Make a clean room\n"
           "\n"
           "Keep quantum libraries isolated in their own environment:"),
        code("!conda create -n qc-lab python=3.11\n!conda activate qc-lab"),
        md("No conda? The built-in alternative works the same way:"),
        code("!python -m venv qc-lab\n!source qc-lab/bin/activate   # Windows: qc-lab\\Scripts\\activate"),
        md("## Step 3 — Install Jupyter\n"
           "\n"
           "Notebooks let you run code cell-by-cell and see results instantly:"),
        code("!pip install notebook\n!jupyter --version"),
        md("Then run `jupyter notebook` — a browser tab should open."),
        md("## Step 4 — Install the quantum stack"),
        code("!pip install qiskit qiskit-aer"),
        md("Verify it took:"),
        code("import qiskit\nprint(qiskit.__version__)", "2.5.2\n"),
        md("## Step 5 — Python warm-up (3 minutes)\n"
           "\n"
           "Qiskit is a Python library, so here are the three constructs you'll use constantly:"),
        code("# variables + f-strings\n"
             "shots = 1000\n"
             "print(f\"Running {shots} shots\")\n"
             "\n"
             "# loops\n"
             "total = 0\n"
             "for i in range(10):\n"
             "    total += i\n"
             "print(total)   # 45\n"
             "\n"
             "# functions\n"
             "def greet(name):\n"
             "    return f\"Hello, {name}!\"\n"
             "print(greet(\"qubit\"))",
             "Running 1000 shots\n45\nHello, qubit!\n"),
        md("## Step 6 — Build your first circuit\n"
           "\n"
           "A quantum circuit has **qubits** (quantum registers) and **classical bits** "
           "(where measurement results land). One qubit, one classical bit, one measurement:"),
        code("from qiskit import QuantumCircuit\n"
             "\n"
             "qc = QuantumCircuit(1, 1)  # 1 qubit, 1 classical bit\n"
             "qc.measure(0, 0)           # measure qubit 0 -> bit 0\n"
             "print(qc.draw())",
             "     ┌─┐\n  q: ┤M├\n     └╥┘\nc: 1/═╩═\n      0\n"),
        md("## Step 7 — Run it on a simulator\n"
           "\n"
           "No quantum hardware needed — `AerSimulator` mimics an ideal quantum computer. "
           "Run the circuit 1,000 times and count the outcomes:"),
        code("from qiskit_aer import AerSimulator\n"
             "\n"
             "sim = AerSimulator()\n"
             "job = sim.run(qc, shots=1000)\n"
             "counts = job.result().get_counts()\n"
             "print(counts)",
             "{'0': 1000}\n"),
        md("A qubit in state |0⟩ measures 0 every single time. So far, boringly classical. "
           "That changes now."),
        md("## Step 8 — Your turn: flip the qubit\n"
           "\n"
           "The **X gate** is the quantum NOT — it flips |0⟩ to |1⟩. Add it *before* the "
           "measurement. Before running: **predict** the counts out loud."),
        code("qc2 = QuantumCircuit(1, 1)\n"
             "qc2.x(0)          # flip |0> -> |1>\n"
             "qc2.measure(0, 0)\n"
             "\n"
             "counts2 = sim.run(qc2, shots=1000).result().get_counts()\n"
             "print(counts2)",
             "{'1': 1000}\n"),
        md("## Step 9 — Your turn: superposition\n"
           "\n"
           "The **H (Hadamard) gate** puts |0⟩ into a superposition — neither 0 nor 1 until "
           "measured. Predict first, then run:"),
        code("qc3 = QuantumCircuit(1, 1)\n"
             "qc3.h(0)          # |0> -> superposition\n"
             "qc3.measure(0, 0)\n"
             "\n"
             "counts3 = sim.run(qc3, shots=1000).result().get_counts()\n"
             "print(counts3)",
             "{'0': 498, '1': 502}\n"),
        md("Roughly half and half — never exactly 500/500, and different every run. "
           "That randomness is not a bug: it is quantum mechanics, observed."),
        md("## Debrief — what did you prove?\n"
           "\n"
           "With three tiny circuits you verified the core facts of quantum computing: a qubit "
           "starts at |0⟩, gates transform its state, measurement collapses it to classical bits, "
           "and superposition produces genuinely random outcomes.\n"
           "\n"
           "Next: two qubits, where things get *entangled* — that's Lab 02."),
    ], lang="en")


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    jobs = [("lab-01-first-circuit.en.ipynb", lab01_en())]
    for name, nb in jobs:
        path = os.path.join(OUT_DIR, name)
        with open(path, "w", encoding="utf-8") as f:
            json.dump(nb, f, ensure_ascii=False, indent=1)
            f.write("\n")
        print("wrote", path, "-", len(nb["cells"]), "cells")


if __name__ == "__main__":
    main()
