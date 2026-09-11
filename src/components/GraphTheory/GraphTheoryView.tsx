import React, { useState, useEffect, useMemo } from 'react';
import {
  Network,
  GitGraph,
  Search,
  Activity,
  Info,
  Layers,
  Sparkles,
  Compass,
  Play,
  RotateCcw,
} from 'lucide-react';
import type { MoveName } from '../../cube/CubeModel';
import { Cube3D } from '../Cube3D/Cube3D';
import { KatexMath } from './KatexMath';
import {
  SubgroupGenerator,
  type SubgroupData,
  type GraphNode,
} from '../../cube/SubgroupGenerator';
import { useTranslation } from '../../i18n/LanguageContext';

export const GraphTheoryView: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'explorer' | 'cayley' | 'diameter' | 'search' | 'commutators'>('explorer');

  // Subgroup Explorer State
  const [subgroupType, setSubgroupType] = useState<'checkerboard' | 'r2u2' | 'commutator'>('checkerboard');
  const [subgraphData, setSubgraphData] = useState<SubgroupData>(() =>
    SubgroupGenerator.generateCheckerboardSubgraph()
  );
  const [selectedNodeId, setSelectedNodeId] = useState<string>('node_0');
  const [bfsExplored, setBfsExplored] = useState<string[]>([]);
  const [bfsPath, setBfsPath] = useState<string[]>([]);
  const [bfsMoves, setBfsMoves] = useState<MoveName[]>([]);
  const [isBfsRunning, setIsBfsRunning] = useState<boolean>(false);

  // Update subgraph data on type change
  useEffect(() => {
    let data: SubgroupData;
    if (subgroupType === 'checkerboard') {
      data = SubgroupGenerator.generateCheckerboardSubgraph();
    } else if (subgroupType === 'r2u2') {
      data = SubgroupGenerator.generateR2U2Subgraph();
    } else {
      data = SubgroupGenerator.generateCommutatorOrbit();
    }
    setSubgraphData(data);
    setSelectedNodeId(data.rootId);
    setBfsExplored([]);
    setBfsPath([]);
    setBfsMoves([]);
  }, [subgroupType]);

  const selectedNode = useMemo(() => {
    return subgraphData.nodes.find((n: GraphNode) => n.id === selectedNodeId) || subgraphData.nodes[0];
  }, [subgraphData, selectedNodeId]);

  // Animated BFS Execution
  const runLiveBFS = () => {
    if (isBfsRunning) return;
    setIsBfsRunning(true);
    setBfsExplored([]);
    setBfsPath([]);
    setBfsMoves([]);

    const result = SubgroupGenerator.runBFS(subgraphData, subgraphData.rootId, selectedNodeId);

    // Animate exploration wavefront
    result.exploredOrder.forEach((nodeId, idx) => {
      setTimeout(() => {
        setBfsExplored((prev) => [...prev, nodeId]);
        if (idx === result.exploredOrder.length - 1) {
          // Finish BFS and illuminate shortest path
          setTimeout(() => {
            setBfsPath(result.pathNodeIds);
            setBfsMoves(result.pathMoves);
            setIsBfsRunning(false);
          }, 300);
        }
      }, idx * 180);
    });
  };

  const resetBFS = () => {
    setBfsExplored([]);
    setBfsPath([]);
    setBfsMoves([]);
    setIsBfsRunning(false);
  };

  // God's number depth distribution data
  const depthDistribution = [
    { depth: 0, count: '1' },
    { depth: 1, count: '18' },
    { depth: 2, count: '243' },
    { depth: 3, count: '3,274' },
    { depth: 4, count: '44,018' },
    { depth: 5, count: '591,842' },
    { depth: 6, count: '7,951,424' },
    { depth: 7, count: '106,787,014' },
    { depth: 8, count: '1,433,887,698' },
    { depth: 9, count: '19,250,560,000' },
    { depth: 10, count: '258,400,000,000' },
    { depth: 11, count: '3.47 × 10¹²' },
    { depth: 12, count: '4.64 × 10¹³' },
    { depth: 13, count: '6.20 × 10¹⁴' },
    { depth: 14, count: '8.10 × 10¹⁵' },
    { depth: 15, count: '1.01 × 10¹⁷' },
    { depth: 16, count: '1.14 × 10¹⁸' },
    { depth: 17, count: '1.26 × 10¹⁹' },
    { depth: 18, count: '2.90 × 10¹⁹' },
    { depth: 19, count: '1.50 × 10¹⁸' },
    { depth: 20, count: '≈ 490,000,000' },
  ];

  const currentSubgroupMeta =
    subgroupType === 'checkerboard'
      ? t.graph.explorer.subgroups.checkerboard
      : subgroupType === 'r2u2'
      ? t.graph.explorer.subgroups.r2u2
      : t.graph.explorer.subgroups.commutator;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 flex flex-col gap-6">
      {/* Header Banner */}
      <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/30">
              <Network className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              {t.graph.badge}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {t.graph.title}
          </h1>
          <p className="text-sm text-slate-300">
            {t.graph.subtitle}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-1.5 bg-slate-950/70 p-1.5 rounded-xl border border-white/5">
          <button
            type="button"
            onClick={() => setActiveTab('explorer')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === 'explorer'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" /> {t.graph.tabs.explorer}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('cayley')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === 'cayley'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <GitGraph className="w-3.5 h-3.5" /> {t.graph.tabs.cayley}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('diameter')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === 'diameter'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Compass className="w-3.5 h-3.5" /> {t.graph.tabs.diameter}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('search')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === 'search'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Search className="w-3.5 h-3.5" /> {t.graph.tabs.search}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('commutators')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === 'commutators'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> {t.graph.tabs.commutators}
          </button>
        </div>
      </div>

      {/* TAB 1: INTERACTIVE CAYLEY SUBGRAPH EXPLORER */}
      {activeTab === 'explorer' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Canvas & Controls */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col gap-4">
              {/* Explorer Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400">
                    {t.graph.explorer.selectSubgroup}
                  </span>
                  <select
                    value={subgroupType}
                    onChange={(e) => setSubgroupType(e.target.value as any)}
                    className="bg-slate-900 border border-white/10 rounded-lg text-xs font-semibold text-cyan-300 px-3 py-1.5 focus:outline-none focus:border-cyan-500"
                  >
                    <option value="checkerboard">
                      {t.graph.explorer.subgroups.checkerboard.name}
                    </option>
                    <option value="r2u2">
                      {t.graph.explorer.subgroups.r2u2.name}
                    </option>
                    <option value="commutator">
                      {t.graph.explorer.subgroups.commutator.name}
                    </option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={runLiveBFS}
                    disabled={isBfsRunning}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs rounded-lg shadow-md transition disabled:opacity-50"
                  >
                    <Play className="w-3.5 h-3.5" /> {t.graph.explorer.runBfs}
                  </button>
                  <button
                    type="button"
                    onClick={resetBFS}
                    className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition"
                    title={t.graph.explorer.resetBfs}
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Subgraph Meta Description */}
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentSubgroupMeta.desc}
              </p>

              {/* Interactive SVG Graph Area */}
              <div className="relative w-full h-[440px] bg-slate-950/80 rounded-xl border border-white/5 flex items-center justify-center overflow-hidden">
                <svg
                  viewBox="0 0 440 440"
                  className="w-full h-full max-w-[440px] max-h-[440px]"
                >
                  <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Edges */}
                  {subgraphData.edges.map((edge) => {
                    const src = subgraphData.nodes.find((n) => n.id === edge.source);
                    const tgt = subgraphData.nodes.find((n) => n.id === edge.target);
                    if (!src || !tgt) return null;

                    const isPathEdge =
                      bfsPath.includes(edge.source) &&
                      bfsPath.includes(edge.target) &&
                      Math.abs(bfsPath.indexOf(edge.source) - bfsPath.indexOf(edge.target)) === 1;

                    return (
                      <g key={`${edge.source}-${edge.target}-${edge.move}`}>
                        <line
                          x1={src.x}
                          y1={src.y}
                          x2={tgt.x}
                          y2={tgt.y}
                          stroke={isPathEdge ? '#10b981' : '#334155'}
                          strokeWidth={isPathEdge ? 3.5 : 1.5}
                          strokeDasharray={isPathEdge ? undefined : '3,3'}
                          className="transition-all duration-300"
                        />
                        {/* Edge Move Label */}
                        <text
                          x={((src.x || 0) + (tgt.x || 0)) / 2}
                          y={((src.y || 0) + (tgt.y || 0)) / 2 - 3}
                          fill={isPathEdge ? '#34d399' : '#64748b'}
                          fontSize="9"
                          fontFamily="monospace"
                          fontWeight="bold"
                          textAnchor="middle"
                        >
                          {edge.move}
                        </text>
                      </g>
                    );
                  })}

                  {/* Nodes */}
                  {subgraphData.nodes.map((node) => {
                    const isSelected = node.id === selectedNodeId;
                    const isRoot = node.id === subgraphData.rootId;
                    const isExplored = bfsExplored.includes(node.id);
                    const isInPath = bfsPath.includes(node.id);

                    let fillColor = '#1e293b';
                    let strokeColor = '#475569';
                    if (isRoot) {
                      fillColor = '#0f766e';
                      strokeColor = '#14b8a6';
                    }
                    if (isExplored) {
                      fillColor = '#1e3a8a';
                      strokeColor = '#38bdf8';
                    }
                    if (isInPath) {
                      fillColor = '#065f46';
                      strokeColor = '#34d399';
                    }
                    if (isSelected) {
                      strokeColor = '#facc15';
                    }

                    return (
                      <g
                        key={node.id}
                        className="cursor-pointer transition-transform hover:scale-110"
                        onClick={() => setSelectedNodeId(node.id)}
                      >
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={isSelected ? 22 : 18}
                          fill={fillColor}
                          stroke={strokeColor}
                          strokeWidth={isSelected ? 3.5 : 2}
                          filter={isSelected || isInPath ? 'url(#glow)' : undefined}
                          className="transition-all duration-300"
                        />
                        <text
                          x={node.x}
                          y={(node.y || 0) + 4}
                          fill="#f8fafc"
                          fontSize="10"
                          fontWeight="bold"
                          textAnchor="middle"
                          pointerEvents="none"
                        >
                          d={node.depth}
                        </text>
                        {/* Node Label Below */}
                        <text
                          x={node.x}
                          y={(node.y || 0) + 30}
                          fill={isSelected ? '#facc15' : '#94a3b8'}
                          fontSize="9"
                          fontFamily="monospace"
                          textAnchor="middle"
                          pointerEvents="none"
                        >
                          {node.label.length > 14 ? `${node.label.slice(0, 12)}...` : node.label}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Graph Legend */}
                <div className="absolute bottom-2 left-2 flex flex-wrap gap-2 text-[10px] text-slate-400 bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-white/5 backdrop-blur">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-500 inline-block" /> {t.graph.explorer.legendSolved}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block" /> {t.graph.explorer.legendVisited}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" /> {t.graph.explorer.legendPath}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full border-2 border-amber-400 inline-block" /> {t.graph.explorer.legendSelected}
                  </span>
                </div>
              </div>

              {/* BFS Path Results Bar */}
              {bfsPath.length > 0 && (
                <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="font-semibold text-emerald-300">
                      {t.graph.explorer.shortestPath} ({bfsMoves.length}):
                    </span>
                    <span className="font-mono font-bold text-white bg-slate-900 px-2 py-0.5 rounded">
                      {bfsMoves.length === 0 ? t.graph.explorer.identity : bfsMoves.join(' → ')}
                    </span>
                  </div>
                  <span className="text-slate-400 text-[11px]">
                    {t.graph.explorer.exploredStates}: {bfsExplored.length}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: 3D Synchronization & State Inspector */}
          <div className="lg:col-span-4 flex flex-col gap-4 sticky top-6">
            <div className="glass-panel rounded-2xl p-5 border border-white/10 flex flex-col items-center gap-4">
              <div className="w-full flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  {t.graph.explorer.realtimeSync}
                </span>
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  {t.graph.explorer.depth} {selectedNode.depth}
                </span>
              </div>

              {/* Synchronized 3D Cube */}
              <div className="w-full h-64 sm:h-72 rounded-xl bg-slate-950/60 border border-white/5 overflow-hidden">
                <Cube3D
                  cubeModel={selectedNode.cube}
                  interactive={true}
                  className="w-full h-full"
                />
              </div>

              {/* Node Metadata Card */}
              <div className="w-full flex flex-col gap-2 p-3 bg-slate-900/80 rounded-xl border border-white/5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">{t.graph.explorer.nodeId}</span>
                  <span className="font-mono font-semibold text-white">{selectedNode.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{t.graph.explorer.movesSeq}</span>
                  <span className="font-mono font-semibold text-cyan-300">
                    {selectedNode.moves.length === 0 ? t.graph.explorer.identity : selectedNode.moves.join(' ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{t.graph.explorer.diameter}</span>
                  <span className="font-mono font-semibold text-white">{subgraphData.diameter}</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed text-center">
                {t.graph.explorer.syncHint}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CAYLEY GRAPH FOUNDATIONS */}
      {activeTab === 'cayley' && (
        <div className="flex flex-col gap-6">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-white">
              {t.graph.cayleySection.title}
            </h2>

            <div className="text-sm text-slate-300 leading-relaxed flex flex-col gap-4">
              <p>
                {t.graph.cayleySection.intro}
              </p>

              <div className="p-4 bg-slate-950/80 rounded-xl border border-white/10 font-mono text-xs">
                <KatexMath
                  block
                  math="V = G = \operatorname{Aut}(\text{Cube}), \quad E = \{(u, v) \mid v = u \cdot s, \; s \in S\}"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <div className="p-4 bg-slate-900/60 rounded-xl border border-white/5 flex flex-col gap-2">
                  <span className="text-xs uppercase font-bold text-cyan-400">
                    {t.graph.cayleySection.regularTitle}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.graph.cayleySection.regularDesc}
                  </p>
                </div>

                <div className="p-4 bg-slate-900/60 rounded-xl border border-white/5 flex flex-col gap-2">
                  <span className="text-xs uppercase font-bold text-cyan-400">
                    {t.graph.cayleySection.vertexTransitiveTitle}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.graph.cayleySection.vertexTransitiveDesc}
                  </p>
                </div>

                <div className="p-4 bg-slate-900/60 rounded-xl border border-white/5 flex flex-col gap-2">
                  <span className="text-xs uppercase font-bold text-cyan-400">
                    {t.graph.cayleySection.bipartiteTitle}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.graph.cayleySection.bipartiteDesc}
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white pt-4">
                {t.graph.cayleySection.groupOrderTitle}
              </h3>
              <p>
                {t.graph.cayleySection.groupOrderIntro}
              </p>

              <div className="p-4 bg-slate-950/80 rounded-xl border border-white/10 text-center font-mono text-xs">
                <KatexMath
                  block
                  math="|G| = \frac{8! \cdot 3^8 \cdot 12! \cdot 2^{12}}{2 \cdot 3 \cdot 2} = 43,252,003,274,489,856,000 \approx 4.3252 \times 10^{19}"
                />
              </div>

              <p>
                {t.graph.cayleySection.twelveOrbitsIntro}
              </p>

              <ul className="flex flex-col gap-3 pl-2">
                <li className="flex items-start gap-2 text-xs">
                  <span className="text-cyan-400 font-bold">{t.graph.cayleySection.cornerParity}:</span>
                  <span>
                    {t.graph.cayleySection.cornerParityDesc}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-xs">
                  <span className="text-cyan-400 font-bold">{t.graph.cayleySection.edgeParity}:</span>
                  <span>
                    {t.graph.cayleySection.edgeParityDesc}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-xs">
                  <span className="text-cyan-400 font-bold">{t.graph.cayleySection.permParity}:</span>
                  <span>
                    {t.graph.cayleySection.permParityDesc}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: GOD'S NUMBER & GRAPH DIAMETER */}
      {activeTab === 'diameter' && (
        <div className="flex flex-col gap-6">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase font-bold text-amber-400">
                {t.graph.diameterSection.badge}
              </span>
              <h2 className="text-2xl font-bold text-white">
                {t.graph.diameterSection.title}
              </h2>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {t.graph.diameterSection.intro}
            </p>

            <div className="p-3 bg-slate-950/80 rounded-xl border border-white/10 text-center font-mono text-xs">
              <KatexMath
                block
                math="\operatorname{diam}(\Gamma) = \max_{u, v \in V} d(u, v) = \max_{v \in V} d(\text{Solved}, v)"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-gradient-to-br from-amber-500/10 to-transparent rounded-xl border border-amber-500/20 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-amber-300">
                    {t.graph.diameterSection.htmTitle}
                  </span>
                  <span className="text-2xl font-extrabold text-amber-400">20 HTM</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.graph.diameterSection.htmDesc}
                </p>
              </div>

              <div className="p-5 bg-gradient-to-br from-sky-500/10 to-transparent rounded-xl border border-sky-500/20 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-sky-300">
                    {t.graph.diameterSection.qtmTitle}
                  </span>
                  <span className="text-2xl font-extrabold text-sky-400">26 QTM</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.graph.diameterSection.qtmDesc}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-base font-bold text-white">
                {t.graph.diameterSection.superflipTitle}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.graph.diameterSection.superflipDesc}
              </p>
              <div className="p-3 bg-slate-900 font-mono text-xs text-cyan-300 rounded-lg border border-white/5">
                U R2 F B R B2 R U2 L B2 R U' D' R2 F R' L B2 U2 F2
              </div>
            </div>

            {/* Depth Distribution Table */}
            <div className="flex flex-col gap-3 pt-2">
              <h3 className="text-base font-bold text-white">
                {t.graph.diameterSection.distTitle}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
                {depthDistribution.map((d) => (
                  <div
                    key={d.depth}
                    className={`p-2.5 rounded-lg border flex flex-col items-center gap-1 text-center transition ${
                      d.depth === 20
                        ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 font-bold'
                        : d.depth === 18
                        ? 'bg-sky-500/20 border-sky-500/40 text-sky-200 font-bold'
                        : 'bg-slate-900/60 border-white/5 text-slate-300'
                    }`}
                  >
                    <span className="text-[10px] uppercase text-slate-400">d = {d.depth}</span>
                    <span className="text-xs font-mono">{d.count}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 italic">
                {t.graph.diameterSection.distNote}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: SEARCH ALGORITHMS & PATTERN DATABASES */}
      {activeTab === 'search' && (
        <div className="flex flex-col gap-6">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-white">
              {t.graph.searchSection.title}
            </h2>

            <div className="text-sm text-slate-300 leading-relaxed flex flex-col gap-4">
              <h3 className="text-base font-bold text-white">
                {t.graph.searchSection.bfsFailTitle}
              </h3>
              <p>
                {t.graph.searchSection.bfsFailDesc}
              </p>

              <div className="p-3 bg-slate-950/80 rounded-xl border border-white/10 text-center font-mono text-xs">
                <KatexMath math="13.35^{20} \approx 1.8 \times 10^{22} \text{ states}" />
              </div>

              <p>
                {t.graph.searchSection.paradigmsIntro}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="p-4 bg-slate-900/60 rounded-xl border border-white/5 flex flex-col gap-2">
                  <span className="text-xs uppercase font-bold text-cyan-400">
                    {t.graph.searchSection.bibfsTitle}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.graph.searchSection.bibfsDesc}
                  </p>
                </div>

                <div className="p-4 bg-slate-900/60 rounded-xl border border-white/5 flex flex-col gap-2">
                  <span className="text-xs uppercase font-bold text-cyan-400">
                    {t.graph.searchSection.pdbTitle}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.graph.searchSection.pdbDesc}
                  </p>
                </div>
              </div>

              <h3 className="text-base font-bold text-white pt-4">
                {t.graph.searchSection.kociembaTitle}
              </h3>
              <p>
                {t.graph.searchSection.kociembaIntro}
              </p>

              <div className="p-4 bg-slate-950/80 rounded-xl border border-white/10 text-center font-mono text-xs flex flex-col gap-2">
                <KatexMath
                  block
                  math="G = \langle U, D, L, R, F, B \rangle \;\xrightarrow{\text{Phase 1}}\; H = \langle U, D, L^2, R^2, F^2, B^2 \rangle \;\xrightarrow{\text{Phase 2}}\; \{e\}"
                />
              </div>

              <div className="flex flex-col gap-3">
                <div className="p-3 bg-slate-900 rounded-lg border border-white/5 text-xs flex flex-col gap-1">
                  <span className="font-bold text-cyan-300">
                    {t.graph.searchSection.phase1Title}
                  </span>
                  <p className="text-slate-300">
                    {t.graph.searchSection.phase1Desc}
                  </p>
                </div>

                <div className="p-3 bg-slate-900 rounded-lg border border-white/5 text-xs flex flex-col gap-1">
                  <span className="font-bold text-cyan-300">
                    {t.graph.searchSection.phase2Title}
                  </span>
                  <p className="text-slate-300">
                    {t.graph.searchSection.phase2Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: COMMUTATORS & CONJUGATION */}
      {activeTab === 'commutators' && (
        <div className="flex flex-col gap-6">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-white">
              {t.graph.commutatorSection.title}
            </h2>

            <div className="text-sm text-slate-300 leading-relaxed flex flex-col gap-4">
              <p>
                {t.graph.commutatorSection.intro}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                <div className="p-5 bg-slate-900/70 rounded-xl border border-white/5 flex flex-col gap-3">
                  <span className="text-xs uppercase font-bold text-amber-400">
                    {t.graph.commutatorSection.commutatorTitle}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.graph.commutatorSection.commutatorDesc1}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.graph.commutatorSection.commutatorDesc2}
                  </p>
                </div>

                <div className="p-5 bg-slate-900/70 rounded-xl border border-white/5 flex flex-col gap-3">
                  <span className="text-xs uppercase font-bold text-cyan-400">
                    {t.graph.commutatorSection.conjugateTitle}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.graph.commutatorSection.conjugateIntro}
                  </p>
                  <ul className="text-xs text-slate-300 flex flex-col gap-1.5 pl-2">
                    <li>
                      <strong className="text-white">•</strong> {t.graph.commutatorSection.setupMove}
                    </li>
                    <li>
                      <strong className="text-white">•</strong> {t.graph.commutatorSection.operatorMove}
                    </li>
                    <li>
                      <strong className="text-white">•</strong> {t.graph.commutatorSection.teardownMove}
                    </li>
                  </ul>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.graph.commutatorSection.conjugateSummary}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-sky-950/40 to-indigo-950/30 rounded-xl border border-sky-500/20 mt-2 flex items-start gap-3">
                <Info className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-200 leading-relaxed">
                  {t.graph.commutatorSection.infoBox}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
